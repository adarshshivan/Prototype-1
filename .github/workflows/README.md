# GitHub Actions CI/CD Pipeline Documentation

## Overview

This enterprise-grade CI/CD pipeline provides comprehensive automation for your React + Vite application, including:

- ✅ Code quality checks and linting
- 🔒 Security auditing and secret scanning
- 🏗️ Production build generation
- 🧪 Automated testing
- 📊 Code quality analysis
- 🚀 Automated deployments (staging & production)

## Pipeline Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   TRIGGER (Push/PR)                      │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
   ┌────▼────┐              ┌────▼────────┐
   │  Lint   │              │  Security   │
   └────┬────┘              └─────────────┘
        │
   ┌────▼────┐
   │  Build  │
   └────┬────┘
        │
   ┌────▼────┐
   │  Test   │
   └────┬────┘
        │
   ┌────▼──────────────┐
   │  Code Quality     │
   └───────────────────┘
        │
   ┌────▼─────────────────────┐
   │  Deploy (if conditions   │
   │  met)                    │
   └──────────────────────────┘
```

## Workflow Jobs Breakdown

### 1. **Lint** - Code Quality Checks
- Runs ESLint to enforce code standards
- Checks code formatting with Prettier
- Fast-fails on critical issues

### 2. **Security** - Security Audit
- Checks for known vulnerabilities using `npm audit`
- Scans for accidentally committed secrets
- Generates security reports

### 3. **Build** - Application Build
- Installs dependencies using npm ci (clean install)
- Builds production-ready bundle with Vite
- Analyzes bundle size
- Uploads build artifacts for deployment

### 4. **Test** - Run Tests
- Executes unit tests
- Generates code coverage reports
- Uploads coverage to Codecov (optional)

### 5. **Code Quality** - SonarCloud Analysis
- Deep code quality analysis
- Identifies code smells, bugs, and vulnerabilities
- Tracks technical debt

### 6. **Deploy Staging** - Preview Deployments
- Deploys non-main branches to staging environment
- Creates preview URLs for pull requests
- Posts preview links as PR comments

### 7. **Deploy Production** - Production Deployments
- Deploys main/master branch to production
- Creates GitHub releases
- Production environment protection

### 8. **Cleanup** - Post-deployment Cleanup
- Cleans up temporary artifacts
- Frees up storage space

## Setup Instructions

### Step 1: Repository Secrets Configuration

Navigate to your GitHub repository → Settings → Secrets and variables → Actions, then add:

#### Required Secrets for Deployment:

```
NETLIFY_AUTH_TOKEN    - Your Netlify authentication token
NETLIFY_SITE_ID       - Your Netlify site ID
```

#### Optional Secrets (for enhanced features):

```
SONAR_TOKEN          - SonarCloud authentication token
CODECOV_TOKEN        - Codecov upload token
```

### Step 2: Obtaining Netlify Credentials

1. **Get Netlify Auth Token:**
   - Go to https://app.netlify.com/user/applications
   - Create a new personal access token
   - Copy and save as `NETLIFY_AUTH_TOKEN`

2. **Get Netlify Site ID:**
   - Create a new site on Netlify or use existing one
   - Go to Site Settings → General → Site details
   - Copy the "Site ID" value
   - Save as `NETLIFY_SITE_ID`

### Step 3: Configure SonarCloud (Optional)

1. Visit https://sonarcloud.io/
2. Sign in with GitHub
3. Create a new project
4. Copy the token and save as `SONAR_TOKEN`

### Step 4: Configure Package.json Scripts

Ensure your `package.json` has these scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "test": "vitest",
    "coverage": "vitest --coverage"
  }
}
```

### Step 5: Environment Configuration

Create environment protection rules:

1. Go to Repository → Settings → Environments
2. Create two environments: `staging` and `production`
3. For `production`:
   - Add required reviewers (recommended)
   - Set deployment branch to `main` or `master` only
   - Configure environment secrets if needed

## Customization Options

### Change Deployment Service

**Current:** Netlify  
**Alternatives:** GitHub Pages, Vercel, AWS S3, Azure Static Web Apps

#### Example: Switch to Vercel

Replace the Netlify deployment step with:

```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.ORG_ID }}
    vercel-project-id: ${{ secrets.PROJECT_ID }}
```

#### Example: Switch to GitHub Pages

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
```

### Modify Node.js Version

Change the environment variable at the top of the workflow:

```yaml
env:
  NODE_VERSION: '20.x'  # Change to 18.x, 21.x, etc.
```

### Add Slack/Discord Notifications

Add at the end of production deployment:

```yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    text: 'Deployment completed!'
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
  if: always()
```

## Triggering the Pipeline

### Automatic Triggers:
- **Push to any branch** → Runs lint, security, build, test
- **Push to main/master** → Full pipeline + production deployment
- **Pull Request** → Full pipeline + staging deployment with preview

### Manual Trigger:
1. Go to Actions tab in GitHub
2. Select "CI/CD Pipeline"
3. Click "Run workflow"
4. Choose branch and run

## Monitoring & Debugging

### View Workflow Runs:
- Navigate to Actions tab in your repository
- Click on specific workflow run to see details
- Expand each job to see step-by-step logs

### Common Issues & Solutions:

**Issue:** Lint job fails  
**Solution:** Run `npm run lint` locally and fix errors

**Issue:** Build artifacts not found  
**Solution:** Ensure `npm run build` creates a `dist/` folder

**Issue:** Deployment fails  
**Solution:** Verify secrets are correctly set in repository settings

**Issue:** Tests fail  
**Solution:** Run `npm test` locally to debug

## Performance Optimizations

This pipeline includes several optimizations:

1. **Dependency Caching** - Reuses node_modules between runs
2. **Concurrency Control** - Cancels outdated runs automatically
3. **Parallel Jobs** - Runs independent jobs simultaneously
4. **Artifact Retention** - Keeps artifacts for 7 days only

## Security Best Practices

- ✅ Never commit secrets to the repository
- ✅ Use GitHub Secrets for sensitive data
- ✅ Enable branch protection rules
- ✅ Require status checks before merging
- ✅ Use environment protection for production
- ✅ Regularly update action versions

## Cost Considerations

GitHub Actions is free for public repositories with unlimited minutes.

For private repositories:
- Free tier: 2,000 minutes/month
- This pipeline uses approximately 5-10 minutes per run
- ~200-400 runs possible per month on free tier

## Next Steps

1. ✅ Commit the workflow file
2. ✅ Configure repository secrets
3. ✅ Push to GitHub to trigger first run
4. ✅ Monitor the Actions tab for results
5. ✅ Configure environment protection rules
6. ✅ Add status badges to README (optional)

### Adding Status Badges

Add to your README.md:

```markdown
![CI/CD](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI%2FCD%20Pipeline/badge.svg)
```

## Support & Maintenance

- Review workflow runs weekly
- Update action versions monthly
- Monitor security audit results
- Review and address code quality issues

---

**Need Help?** Check GitHub Actions documentation: https://docs.github.com/en/actions

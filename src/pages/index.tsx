import Link from '@docusaurus/Link';
import { Button, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { ArrowRight, Zap, Code, BookOpen } from 'lucide-react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Card, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import styles from './index.module.css';

export default function HomePage() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="Description will go into a meta tag in <head />">
      <Theme>
        <div className={styles.root}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.container}>
              <div className={styles.textCenter}>
                <h1 className={styles.heroTitle}>Harness Pipelines</h1>
                <p className={styles.heroSubtitle}>
                  Build, test, and deploy with intelligent CI/CD pipelines. Learn the syntax,
                  explore examples, and accelerate your software delivery.
                </p>
                <div className={styles.flexCenter}>
                  <Button color="blue" variant="solid" size="3">
                    <Link href="/docs/getting-started" style={{ color: 'white' }}>
                      Get Started
                    </Link>
                    <ArrowRight className={styles.iconSpacing} />
                  </Button>
                  <Button color="blue" variant="outline" size="3">
                    <Link href="/docs/pipeline-syntax" style={{ color: 'gray' }}>
                      View Syntax Reference
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Cards */}
          <div className={styles.container}>
            <div className={styles.cardGrid}>
              <Card className={styles.cardHover}>
                <Link href="/docs/getting-started">
                  <CardHeader>
                    <div className={`${styles.iconBox} ${styles.blueBg}`}>
                      <Zap className={styles.blueIcon} />
                    </div>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>
                      Quick introduction to Harness Pipelines and your first pipeline
                    </CardDescription>
                  </CardHeader>
                </Link>
              </Card>

              <Card className={styles.cardHover}>
                <Link href="/docs/pipeline-syntax">
                  <CardHeader>
                    <div className={`${styles.iconBox} ${styles.tealBg}`}>
                      <Code className={styles.tealIcon} />
                    </div>
                    <CardTitle>Pipeline Syntax</CardTitle>
                    <CardDescription>
                      Complete reference for pipeline YAML syntax and components
                    </CardDescription>
                  </CardHeader>
                </Link>
              </Card>

              <Card className={styles.cardHover}>
                <Link href="/docs/pipeline-examples">
                  <CardHeader>
                    <div className={`${styles.iconBox} ${styles.greenBg}`}>
                      <BookOpen className={styles.greenIcon} />
                    </div>
                    <CardTitle>Use Cases and Examples</CardTitle>
                    <CardDescription>Code samples for common CI/CD scenarios</CardDescription>
                  </CardHeader>
                </Link>
              </Card>
            </div>
          </div>

          {/* Examples */}
          <section className={styles.graySection}>
            <div className={styles.container}>
              <div className={styles.maxWidthWrapper}>
                <h2 className={styles.sectionHeading}>Quick Examples</h2>
                <div className={styles.exampleGrid}>
                  <div>
                    <h3 className={styles.exampleTitle}>Simple Build Pipeline</h3>
                    <pre className={styles.codeBox}>
                      {`pipeline:
  stages:
  - steps:
    - run: go build`}
                    </pre>
                  </div>
                  <div>
                    <h3 className={styles.exampleTitle}>Conditional Execution</h3>
                    <pre className={styles.codeBox}>
                      {`pipeline:
  if: \${{ branch == "main" }}
  stages:
  - steps:
    - run: go build`}
                    </pre>
                  </div>
                </div>
                <div className={`${styles.textCenter} ${styles.marginTopLg}`}>
                  <Button asChild variant="outline">
                    <Link href="/docs/pipeline-examples">
                      View All Examples <ArrowRight className={styles.iconSpacing} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Theme>
    </Layout>
  );
}

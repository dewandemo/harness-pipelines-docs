import Link from '@docusaurus/Link';
import { Button, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { ArrowRight, GitBranch, Zap, Shield, Layers, Code, BookOpen } from 'lucide-react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Card, CardDescription, CardHeader, CardTitle } from '@site/src/components/ui/card';
export default function HomePage() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Theme>
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">Harness Pipelines</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Build, test, and deploy with intelligent CI/CD pipelines. Learn the syntax,
                  explore examples, and accelerate your software delivery.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button color="blue" variant="solid" size={'3'}>
                    <Link href="/docs/getting-started" className="link">
                      Get Started
                    </Link>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button color="blue" variant="outline" size={'3'}>
                    <Link href="/docs/pipeline">View Syntax Reference</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <Link href="/getting-started">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Zap className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Getting Started</CardTitle>
                      <CardDescription>
                        Quick introduction to Harness Pipelines and your first pipeline
                      </CardDescription>
                    </CardHeader>
                  </Link>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <Link href="/syntax">
                    <CardHeader>
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                        <Code className="h-6 w-6 text-teal-600" />
                      </div>
                      <CardTitle>Pipeline Syntax</CardTitle>
                      <CardDescription>
                        Complete reference for pipeline YAML syntax and components
                      </CardDescription>
                    </CardHeader>
                  </Link>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <Link href="/examples">
                    <CardHeader>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <BookOpen className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle>Examples & Tutorials</CardTitle>
                      <CardDescription>
                        Real-world examples for common CI/CD scenarios
                      </CardDescription>
                    </CardHeader>
                  </Link>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <Link href="/best-practices">
                    <CardHeader>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-purple-600" />
                      </div>
                      <CardTitle>Best Practices</CardTitle>
                      <CardDescription>
                        Guidelines and recommendations for optimal pipeline design
                      </CardDescription>
                    </CardHeader>
                  </Link>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <Link href="/api-reference">
                    <CardHeader>
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <Layers className="h-6 w-6 text-orange-600" />
                      </div>
                      <CardTitle>API Reference</CardTitle>
                      <CardDescription>
                        Detailed API documentation for pipeline automation
                      </CardDescription>
                    </CardHeader>
                  </Link>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <Link href="/github-compatibility">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <GitBranch className="h-6 w-6 text-gray-600" />
                      </div>
                      <CardTitle>GitHub Compatibility</CardTitle>
                      <CardDescription>
                        Using GitHub Actions syntax with Harness extensions
                      </CardDescription>
                    </CardHeader>
                  </Link>
                </Card>
              </div>
            </div>
          </section>
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center pb-16 ">Quick Examples</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-center">
                      Simple Build Pipeline
                    </h3>
                    <pre className="code-box">
                      {`pipeline:
  stages:
  - steps:
    - run: go build`}
                    </pre>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-center">
                      Conditional Execution
                    </h3>
                    <pre className="code-box">
                      {`pipeline:
  if: \${{ branch == "main" }}
  stages:
  - steps:
    - run: go build`}
                    </pre>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Button asChild variant="outline">
                    <Link href="/examples">
                      View All Examples <ArrowRight className="ml-2 h-4 w-4" />
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

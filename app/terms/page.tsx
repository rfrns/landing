'use client';

export default function Terms() {
  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-gray max-w-none text-xl">
            <p className="text-xl text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">1. Acceptance of Terms</h2>
              <p className="text-xl text-muted-foreground mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">2. Use License</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-xl text-muted-foreground mb-6">
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-xl text-muted-foreground space-y-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">3. Disclaimer</h2>
              <p className="text-xl text-muted-foreground mb-6">
                The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">4. Limitations</h2>
              <p className="text-xl text-muted-foreground mb-6">
                In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">5. Revisions and Errata</h2>
              <p className="text-xl text-muted-foreground mb-6">
                The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete or current.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">6. Contact Information</h2>
              <p className="text-xl text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@example.com" className="text-primary hover:underline">
                  legal@example.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
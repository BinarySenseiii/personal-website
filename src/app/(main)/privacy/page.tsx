/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {CustomLink} from '~/components/mdx'
import config from '~/config'

const PrivacyPolicy = () => {
  return (
    <section id="main-content" aria-label="privacy-policy" className="space-y-2 !mb-8">
      <h1 className="font-medium text-lg">Privacy Policy</h1>

      <p className="text-muted-foreground">
        Welcome to {config.appName} personal Website. I understand that privacy online is important
        to users of our Site, especially when conducting business. This statement governs our
        privacy policies with respect to those users of the Site ('Visitors') who visit without
        transacting business and Visitors who register to transact business on the Site and make use
        of the various services offered by [Your Website Name] (collectively, 'Services')
        ('Authorized Customers').
      </p>

      <h2 className="font-medium text-lg">Information We Collect</h2>

      <p className="text-muted-foreground">
        This Site collects personally identifiable information ('PII') from Authorized Customers in
        a variety of ways. PII includes names, email addresses, postal addresses, phone numbers, and
        other information necessary to provide the Services. We may collect PII from Authorized
        Customers only if they voluntarily submit such information to us.
      </p>

      <h2 className="font-medium text-lg">How We Use Information</h2>

      <p className="text-muted-foreground">
        We use collected information for the purposes of providing and improving our Services,
        contacting our Visitors and Authorized Customers regarding updates or promotions, and
        customizing our Site's content.
      </p>

      <h2 className="font-medium text-lg">Disclosure of Information</h2>

      <p className="text-muted-foreground">
        We may disclose PII to affiliated entities, service providers, or legal authorities if
        required to do so by law or in the good-faith belief that such action is necessary to comply
        with state and federal laws or respond to a court order, subpoena, or search warrant.
      </p>

      <h2 className="font-medium text-lg">Security</h2>

      <p className="text-muted-foreground">
        We employ industry-standard security measures to prevent the loss, misuse, and alteration of
        the information under our control. However, no data transmission over the Internet can be
        guaranteed to be 100% secure. As a result, while we strive to protect your PII, we cannot
        guarantee the security of any information you transmit to us.
      </p>

      <h2 className="font-medium text-lg">Changes to this Privacy Policy</h2>

      <p className="text-muted-foreground">
        We reserve the right to update this Privacy Policy at any time. We will notify you about
        significant changes by posting a prominent notice on our Site. Your continued use of the
        Site constitutes your agreement to this Privacy Policy and any updates.
      </p>

      <h2 className="font-medium text-lg">Contact Information</h2>

      <p className="text-muted-foreground">
        If you have any questions or concerns regarding this Privacy Policy, please contact me at
        <CustomLink
          href={`mailto:${config.social.email}`}
          aria-label={`mail me at ${config.social.email}`}
        >
          {config.social.email}
        </CustomLink>
        .
      </p>
    </section>
  )
}

export default PrivacyPolicy

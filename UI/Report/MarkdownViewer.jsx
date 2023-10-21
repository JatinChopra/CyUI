import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const bugBountyReport = `
# SSRF Vulnerability Discovery

## Discovery of the SSRF Vulnerability

During my comprehensive security assessment of the web application, I encountered a Server-Side Request Forgery (SSRF) vulnerability in the application's image upload feature. This vulnerability was identified in the profile picture upload functionality, where users could upload images to customize their profiles. While conducting a thorough security audit, I observed that the application's server was making HTTP requests to user-provided image URLs for processing and displaying these images on user profiles.

## ***How Does It Work***?

The SSRF vulnerability in the image upload process allows an attacker to manipulate the image URL provided during the upload. By specifying a malicious URL pointing to an internal resource or an arbitrary external endpoint, an attacker can trigger unauthorized HTTP requests from the server. These requests may access sensitive internal resources, such as database servers or cloud-based storage, potentially leading to data leakage or service compromise.

![SSRF Vulnerability](https://picsum.photos/500/300)

## Exploiting SSRF

To exploit the SSRF vulnerability, an attacker can provide a malicious URL pointing to an internal service or an external server hosting sensitive data. Once the server makes the malicious HTTP request, the attacker can capture and manipulate the server's response. This could include viewing internal data, conducting port scans, or potentially exfiltrating confidential information.

### Exploitation Code Example

Below is an example of how an attacker might craft a malicious URL to exploit the SSRF vulnerability:

\`\`\`python
# Malicious URL pointing to an internal resource
malicious_url = "http://vulnerable-website.com/internal-resource"

# Make a request to trigger the SSRF
response = requests.get(malicious_url)

# Process the response or manipulate it as needed
print(response.text)
\`\`\`

It is imperative that the identified SSRF vulnerability is addressed and mitigated to prevent potential security breaches and data leakage within the web application.
`;

const CustomImage = ({ src, alt, className }) => (
  <div className={`my-5 rounded-lg bg-[#37393D] p-2 ${className}`}>
    <img src={src} alt={alt} className="max-w-full h-auto" />
  </div>
);

const CustomCode = ({ children, className }) => {
  // Calculate the code size in KB
  const codeSizeInKB = (children.length / 1024).toFixed(2);

  // Split the code into lines and add line numbers
  const codeLines = children.split("\n").map((line, index) => (
    <div key={index} className="line">
      <span className="line-number">{index + 1} </span>
      <span className="line-content"> {line}</span>
    </div>
  ));

  return (
    <div
      className={`my-5 bg-[#37393D]  rounded-lg p-2 overflow-x-auto ${className}`}
    >
      <div className="code-header border-b-[2px] py-2 border-gray border-solid">{`${codeSizeInKB} KB`}</div>
      <div className="code-lines mt-5">{codeLines}</div>
    </div>
  );
};

const MarkdownViewer = () => {
  return (
    <ReactMarkdown
      components={{
        img: CustomImage,
        code: CustomCode,
        h1: ({ children }) => (
          <p className="text-2xl my-5 font-bold">{children}</p>
        ),
        h2: ({ children }) => (
          <p className="text-xl my-5 font-bold">{children}</p>
        ),
        h3: ({ children }) => (
          <p className="text-lg my-5 ont-bold">{children}</p>
        ),
        h4: ({ children }) => (
          <p className="text-base my-5 font-bold">{children}</p>
        ),
        h5: ({ children }) => (
          <p className="text-sm my-5 font-bold">{children}</p>
        ),
        h6: ({ children }) => (
          <p className="text-sm my-5 font-bold">{children}</p>
        ),
      }}
    >
      {bugBountyReport}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;

// This script includes intentional vulnerabilities for testing purposes.

// Hardcoded secrets (vulnerability: hardcoded API key and password)
const apiKey = "12345-very-insecure-api-key";        // Hardcoded API key
const dbPassword = "password123";                    // Hardcoded DB password

// Insecure database configuration (vulnerability: hardcoded credentials and outdated version)
const databaseConfig = {
  type: "PostgreSQL",
  version: "9.4",                                    // Vulnerability: outdated version with known security issues
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "password123"                            // Hardcoded DB credentials
};

// Insecure settings (vulnerability: insecure HTTP and XSS protection settings)
const securitySettings = {
  allowHttp: true,                                   // Vulnerability: HTTP enabled, HTTPS is recommended
  enableXssProtection: false,                        // Vulnerability: XSS protection disabled
  contentSecurityPolicy: "unsafe-inline"             // Vulnerability: allows inline scripts, high XSS risk
};

// Outdated dependencies (vulnerability: dependencies with known vulnerabilities)
const dependencies = [
  { name: "express", version: "2.5.2" },             // Vulnerable version of express
  { name: "lodash", version: "4.17.15" }             // Vulnerable version of lodash
];

// Logging configuration (vulnerability: excessive logging and plaintext logs)
const loggingConfig = {
  level: "debug",                                    // Excessive logging, could expose sensitive information
  format: "plaintext"                                // Vulnerability: plaintext logs, which can lead to data exposure
};

// Privacy and access control issues (vulnerability: privacy concerns and weak access controls)
const featureFlags = {
  enableUserTracking: true,                          // Privacy concern: User tracking enabled
  enableGuestAccess: true                            // Security concern: Guest access enabled, may lead to unauthorized access
};

// Example function that uses the vulnerable configurations
function connectToDatabase() {
  console.log("Connecting to database with:");
  console.log(`Host: ${databaseConfig.host}`);
  console.log(`Port: ${databaseConfig.port}`);
  console.log(`User: ${databaseConfig.username}`);
  // This is just a test; actual DB connection code would go here.
}

// Function call
connectToDatabase();

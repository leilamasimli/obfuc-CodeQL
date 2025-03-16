# Measuring CodeQL Performance against Obfuscation Techniques 
This work evaluates **how obfuscation techniques impact the detection of malicious JavaScript code in npm packages**, with deobfuscation used to analyze residual detection capabilities. The study addresses:  

1. **Impact of Obfuscation**:  
   How effectively can CodeQL detect malicious behavior when code is obfuscated using 12 distinct methods (e.g., string encoding, control-flow flattening)?  

2. **Post-Deobfuscation Resilience**:  
   After deobfuscation, does detection improve, or do obfuscation artifacts still hinder analysis?  

---
##  Prerequisites  

1. **CodeQL CLI**:  
   - **Download**: [CodeQL CLI Binaries](https://github.com/github/codeql-cli-binaries/releases).  
   - **Installation**:  
     ```bash
     # Extract and add to PATH (Linux/macOS example)
     tar -xvzf codeql-linux64.zip -C ~/codeql/
     echo 'export PATH="$HOME/codeql/codeql:$PATH"' >> ~/.bashrc
     source ~/.bashrc
     ```  
   - **Verify**:  
     ```bash
     codeql --version  # Should print the installed version
     ```  

2. **npm CLI**:  
   Ensure `npm` is installed and accessible in your `PATH`:  
   ```bash
   npm --version

   
###  Key Components  
- **10 malicious npm packages** analyzed in three forms:  
  - **Original**: The malicious code stored in `packages/database`. 
  - **Obfuscated**: Each package has 12 obfuscated variants stored in `packages/database/package_name/obfuscated`.
  - **Deobfuscated**: The deobfuscated codes is stored in `packages/database/package_name/obfuscated`.
- **CodeQL Queries**: Developed CodeQL queries stored in `queries` to detect malicious behavior in npm packages. 
- **Metadata**: `packages-metadata.csv` tracking detection rates and methodologies.  

---

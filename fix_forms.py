import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to find <form ...> tags and add/replace action and method.
    # The regex should match <form followed by any attributes until >
    
    def replacer(match):
        form_tag = match.group(0)
        
        # Remove existing action and method if present
        form_tag = re.sub(r'\s+action=["\'][^"\']*["\']', '', form_tag)
        form_tag = re.sub(r'\s+method=["\'][^"\']*["\']', '', form_tag)
        
        # Insert action and method right after <form
        form_tag = form_tag.replace('<form', '<form action="https://formspree.io/f/xqeopjjj" method="POST"')
        
        return form_tag

    new_content = re.sub(r'<form\b[^>]*>', replacer, content)
    
    # Also remove <script src="js/config.js"></script>
    new_content = re.sub(r'<script\s+src=["\']js/config\.js["\']></script>\s*', '', new_content)
    # also remove js/config.js with ../js/config.js
    new_content = re.sub(r'<script\s+src=["\']\.\./js/config\.js["\']></script>\s*', '', new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Modified {filepath}")

for root, dirs, files in os.walk('.'):
    # Skip backend node_modules etc
    if 'node_modules' in root or '.git' in root or 'backend' in root:
        continue
    for file in files:
        if file.endswith('.html'):
            process_file(os.path.join(root, file))

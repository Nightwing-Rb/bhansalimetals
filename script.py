import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add data-animate to section tags that don't have it
    content = re.sub(r'<section([^>]*class="band-[^>]*)(?<!data-animate)>', r'<section\1 data-animate>', content)

    # Change form-input etc to text-input
    content = content.replace('class="form-input"', 'class="text-input"')
    content = content.replace('class="form-select"', 'class="text-input"')
    content = content.replace('class="form-textarea"', 'class="text-input"')

    # Remove the CSS block for them
    css_pattern = r'\s*\.form-input,\s*\.form-select,\s*\.form-textarea\s*\{[^}]*\}\s*\.form-input:focus,\s*\.form-select:focus,\s*\.form-textarea:focus\s*\{[^}]*\}'
    content = re.sub(css_pattern, '', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

process_file('c:/AllStuff/Coding/bhansalimetals-local/src/pages/contact.astro')
process_file('c:/AllStuff/Coding/bhansalimetals-local/src/pages/rfq.astro')

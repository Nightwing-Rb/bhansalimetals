import re

def process_tpi_grid(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add card class and data-animate
    content = content.replace('class="tpi-card"', 'class="card tpi-card" data-animate')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def process_trust_strip(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add data-animate to trust-header and tpi-container
    content = content.replace('class="trust-header"', 'class="trust-header" data-animate')
    content = content.replace('class="trust-pillars"', 'class="trust-pillars" data-animate')
    content = content.replace('class="tpi-container"', 'class="tpi-container" data-animate')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

process_tpi_grid('c:/AllStuff/Coding/bhansalimetals-local/src/components/trust/TpiGrid.astro')
process_trust_strip('c:/AllStuff/Coding/bhansalimetals-local/src/components/trust/TrustStrip.astro')

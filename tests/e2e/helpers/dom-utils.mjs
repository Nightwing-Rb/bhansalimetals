/**
 * High-performance Static HTML / DOM Extraction & Inspection Utility
 * Zero external dependencies. Uses robust regular expressions and text scanners.
 */

export function extractTitle(html) {
  const match = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return match ? match[1].trim() : null;
}

export function extractMeta(html, nameOrProperty) {
  const reg = new RegExp(`<meta\\s+[^>]*(?:name|property)=["']${nameOrProperty}["'][^>]*content=["']([^"']*)["']`, 'i');
  const match1 = html.match(reg);
  if (match1) return match1[1].trim();

  // Reverse attribute order: content first, then name/property
  const regRev = new RegExp(`<meta\\s+[^>]*content=["']([^"']*)["'][^>]*(?:name|property)=["']${nameOrProperty}["']`, 'i');
  const match2 = html.match(regRev);
  return match2 ? match2[1].trim() : null;
}

export function extractAllHeadings(html, tag = 'h[1-6]') {
  const reg = new RegExp(`<(${tag})[^>]*>(.*?)<\\/\\1>`, 'gis');
  const results = [];
  let match;
  while ((match = reg.exec(html)) !== null) {
    results.push({
      tag: match[1].toLowerCase(),
      text: stripTags(match[2]).trim(),
      raw: match[0],
    });
  }
  return results;
}

export function extractH1(html) {
  const h1s = extractAllHeadings(html, 'h1');
  return h1s.length > 0 ? h1s[0].text : null;
}

export function extractAllLinks(html) {
  const reg = /<a\s+[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gis;
  const links = [];
  let match;
  while ((match = reg.exec(html)) !== null) {
    links.push({
      href: match[1],
      text: stripTags(match[2]).trim(),
      raw: match[0],
    });
  }
  return links;
}

export function extractAllImages(html) {
  const reg = /<img\s+([^>]*)\/?>/gis;
  const imgs = [];
  let match;
  while ((match = reg.exec(html)) !== null) {
    const rawAttrs = match[1];
    const srcMatch = rawAttrs.match(/src=["']([^"']*)["']/i);
    const altMatch = rawAttrs.match(/alt=["']([^"']*)["']/i);
    imgs.push({
      src: srcMatch ? srcMatch[1] : '',
      alt: altMatch ? altMatch[1] : '',
      raw: match[0],
    });
  }
  return imgs;
}

export function extractJsonLdSchemas(html) {
  const reg = /<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/gis;
  const schemas = [];
  let match;
  while ((match = reg.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      schemas.push(parsed);
    } catch (e) {
      schemas.push({ __parseError: e.message, raw: match[1] });
    }
  }
  return schemas;
}

export function extractButtons(html) {
  const reg = /<(?:button|a)\s+[^>]*(?:class=["'][^"']*btn[^"']*["']|role=["']button["'])[^>]*>(.*?)<\/(?:button|a)>/gis;
  const buttons = [];
  let match;
  while ((match = reg.exec(html)) !== null) {
    buttons.push({
      text: stripTags(match[1]).trim(),
      raw: match[0],
    });
  }
  return buttons;
}

export function extractTables(html) {
  const reg = /<table[^>]*>(.*?)<\/table>/gis;
  const tables = [];
  let match;
  while ((match = reg.exec(html)) !== null) {
    const tableContent = match[1];
    const headers = [];
    const thReg = /<th[^>]*>(.*?)<\/th>/gis;
    let thMatch;
    while ((thMatch = thReg.exec(tableContent)) !== null) {
      headers.push(stripTags(thMatch[1]).trim());
    }

    const rows = [];
    const trReg = /<tr[^>]*>(.*?)<\/tr>/gis;
    let trMatch;
    while ((trMatch = trReg.exec(tableContent)) !== null) {
      const rowCells = [];
      const tdReg = /<td[^>]*>(.*?)<\/td>/gis;
      let tdMatch;
      while ((tdMatch = tdReg.exec(trMatch[1])) !== null) {
        rowCells.push(stripTags(tdMatch[1]).trim());
      }
      if (rowCells.length > 0) {
        rows.push(rowCells);
      }
    }

    tables.push({ headers, rows, raw: match[0] });
  }
  return tables;
}

export function extractForms(html) {
  const reg = /<form[^>]*>(.*?)<\/form>/gis;
  const forms = [];
  let match;
  while ((match = reg.exec(html)) !== null) {
    forms.push({
      raw: match[0],
      inputs: extractInputs(match[1]),
    });
  }
  return forms;
}

export function extractInputs(htmlSnippet) {
  const reg = /<(?:input|textarea|select)\s+([^>]*)\/?>/gis;
  const inputs = [];
  let match;
  while ((match = reg.exec(htmlSnippet)) !== null) {
    const attrs = match[1];
    const nameMatch = attrs.match(/name=["']([^"']*)["']/i);
    const typeMatch = attrs.match(/type=["']([^"']*)["']/i);
    const idMatch = attrs.match(/id=["']([^"']*)["']/i);
    inputs.push({
      name: nameMatch ? nameMatch[1] : null,
      type: typeMatch ? typeMatch[1] : 'text',
      id: idMatch ? idMatch[1] : null,
      raw: match[0],
    });
  }
  return inputs;
}

export function hasElement(html, selectorPattern) {
  return new RegExp(selectorPattern, 'i').test(html);
}

export function countOccurrences(str, pattern) {
  const matches = str.match(new RegExp(pattern, 'g'));
  return matches ? matches.length : 0;
}

export function stripTags(str) {
  return str.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ');
}

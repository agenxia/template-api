export default async function process(inputs, { llm, config }) {
  const { data, operation } = inputs;
  if (!data) return { result: null, error: 'No data provided' };

  const ops = {
    uppercase: (d) => typeof d === 'string' ? d.toUpperCase() : String(d).toUpperCase(),
    lowercase: (d) => typeof d === 'string' ? d.toLowerCase() : String(d).toLowerCase(),
    reverse: (d) => typeof d === 'string' ? d.split('').reverse().join('') : String(d).split('').reverse().join(''),
    length: (d) => typeof d === 'string' ? d.length : String(d).length,
    json_parse: (d) => JSON.parse(d),
    json_stringify: (d) => JSON.stringify(d),
  };

  const op = operation || 'uppercase';
  const fn = ops[op];
  if (!fn) return { result: null, error: `Unknown operation: ${op}` };

  try {
    const result = fn(data);
    return { result, operation: op };
  } catch (err) {
    return { result: null, error: err.message };
  }
}
const runtime = require('react/jsx-runtime')

const fiberTypes = new Set([
  'mesh',
  'hemisphereLight',
  'pointLight',
  'spotLight',
  'primitive',
  'Canvas',
  'group',
  'directionalLight',
  'ambientLight',
  'pointLight',
  'spotLight',
  'hemisphereLight',
])

const wrap = (type, props, key) => {
  if (typeof type === 'string' && fiberTypes.has(type)) {
    return runtime.jsx('div', props, key)
  }
  return runtime.jsx(type, props, key)
}

module.exports = {
  ...runtime,
  jsx: wrap,
  jsxs: wrap,
  jsxDEV: wrap,
}

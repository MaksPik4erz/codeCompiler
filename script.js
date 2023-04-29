document.addEventListener('DOMContentLoaded', function() {
  const htmlButton = document.getElementById('html-button');
  const cssButton = document.getElementById('css-button');
  const jsButton = document.getElementById('js-button');

  const htmlInput = document.getElementById('html-input');
  const cssInput = document.getElementById('css-input');
  const jsInput = document.getElementById('js-input');

  const htmlCode = document.getElementById('html-code');
  const cssCode = document.getElementById('css-code');
  const jsCode = document.getElementById('js-code');

  const outputFrame = document.querySelector('#output-frame');

  const compileButton = document.querySelector('#compile-button');

  function compile() {
    const html = htmlCode.value;
    const css = cssCode.value ? `<style>${cssCode.value}</style>` : '';
    const js = jsCode.value ? `<script>${jsCode.value}</script>` : '';
    const output = `${html}${css}${js}`;
    outputFrame.srcdoc = output;
  }

  compileButton.addEventListener('click', compile);

  htmlButton.addEventListener('click', () => {
    htmlInput.classList.remove('hidden');
    cssInput.classList.add('hidden');
    jsInput.classList.add('hidden');
  });

  cssButton.addEventListener('click', () => {
    htmlInput.classList.add('hidden');
    cssInput.classList.remove('hidden');
    jsInput.classList.add('hidden');
  });

  jsButton.addEventListener('click', () => {
    htmlInput.classList.add('hidden');
    cssInput.classList.add('hidden');
    jsInput.classList.remove('hidden');
  });
});


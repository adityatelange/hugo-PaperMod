// global variables
const doc = document.documentElement;
const inline = ":inline";
// variables read from your hugo configuration
let showImagePosition = "{{ .Site.Params.figurePositionShow }}";

const showImagePositionLabel = '{{ .Site.Params.figurePositionLabel }}';

function isObj(obj) {
  return (obj && typeof obj === 'object' && obj !== null) ? true : false;
}

function createEl(element = 'div') {
  return document.createElement(element);
}

function elem(selector, parent = document){
  let elem = parent.querySelector(selector);
  return elem != false ? elem : false;
}

function elems(selector, parent = document) {
  let elems = parent.querySelectorAll(selector);
  return elems.length ? elems : false;
}

function pushClass(el, targetClass) {
  if (isObj(el) && targetClass) {
    elClass = el.classList;
    elClass.contains(targetClass) ? false : elClass.add(targetClass);
  }
}

function hasClasses(el) {
  if(isObj(el)) {
    const classes = el.classList;
    return classes.length
  }
}

(function markInlineCodeTags(){
  const codeBlocks = elems('code');
  if(codeBlocks) {
    codeBlocks.forEach(function(codeBlock){
          // Fix for orgmode inline code, leave 'verbatim' alone as well
          containsClass(codeBlock, 'verbatim') ? pushClass(codeBlock, 'noClass') :false;
      hasClasses(codeBlock) ? false: pushClass(codeBlock, 'noClass');
    });
  }
})();

function deleteClass(el, targetClass) {
  if (isObj(el) && targetClass) {
    elClass = el.classList;
    elClass.contains(targetClass) ? elClass.remove(targetClass) : false;
  }
}

function modifyClass(el, targetClass) {
  if (isObj(el) && targetClass) {
    elClass = el.classList;
    elClass.contains(targetClass) ? elClass.remove(targetClass) : elClass.add(targetClass);
  }
}

function containsClass(el, targetClass) {
  if (isObj(el) && targetClass && el !== document ) {
    return el.classList.contains(targetClass) ? true : false;
  }
}

function elemAttribute(elem, attr, value = null) {
  if (value) {
    elem.setAttribute(attr, value);
  } else {
    value = elem.getAttribute(attr);
    return value ? value : false;
  }
}

function wrapEl(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}

function deleteChars(str, subs) {
  let newStr = str;
  if (Array.isArray(subs)) {
    for (let i = 0; i < subs.length; i++) {
      newStr = newStr.replace(subs[i], '');
    }
  } else {
    newStr = newStr.replace(subs, '');
  }
  return newStr;
}

function isBlank(str) {
  return (!str || str.trim().length === 0);
}

function isMatch(element, selectors) {
  if(isObj(element)) {
    if(selectors.isArray) {
      let matching = selectors.map(function(selector){
        return element.matches(selector)
      })
      return matching.includes(true);
    }
    return element.matches(selectors)
  }
}

function copyToClipboard(str) {
  let copy, selection, selected;
  copy = createEl('textarea');
  copy.value = str;
  copy.setAttribute('readonly', '');
  copy.style.position = 'absolute';
  copy.style.left = '-9999px';
  selection = document.getSelection();
  doc.appendChild(copy);
  // check if there is any selected content
  selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
  copy.select();
  document.execCommand('copy');
  doc.removeChild(copy);
  if (selected) { // if a selection existed before copying
    selection.removeAllRanges(); // unselect existing selection
    selection.addRange(selected); // restore the original selection
  }
}

const iconsPath = '{{ default "icons/" .Site.Params.iconsDir }}';

function getMobileOperatingSystem() {
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

function horizontalSwipe(element, func, direction) {
  // call func if result of swipeDirection() 👇🏻 is equal to direction
  let touchstartX = 0;
  let touchendX = 0;
  let swipeDirection = null;

  function handleGesure() {
    return (touchendX + 50 < touchstartX) ? 'left' : (touchendX < touchstartX + 50) ? 'right' : false;
  }

  element.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
  });

  element.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    swipeDirection = handleGesure()
    swipeDirection === direction ? func() : false;
  });

}

function parseBoolean(string) {
  let bool;
  string = string.trim().toLowerCase();
  switch (string) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return undefined;
  }
};

function forEach(node, callback) {
  node ? Array.prototype.forEach.call(node.childNodes, callback) : false;
}

function findQuery(query = 'query') {
  const urlParams = new URLSearchParams(window.location.search);
  if(urlParams.has(query)){
    let c = urlParams.get(query);
    return c;
  }
  return "";
}

function wrapText(text, context, wrapper = 'mark') {
  let open = `<${wrapper}>`;
  let close = `</${wrapper}>`;
  let escapedOpen = `%3C${wrapper}%3E`;
  let escapedClose = `%3C/${wrapper}%3E`;
  function wrap(context) {
    let c = context.innerHTML;
    let pattern = new RegExp(text, "gi");
    let matches = text.length ? c.match(pattern) : null;

    if(matches) {
      matches.forEach(function(matchStr){
        c = c.replaceAll(matchStr, `${open}${matchStr}${close}`);
        context.innerHTML = c;
      });

      const images = elems('img', context);

      if(images) {
        images.forEach(image => {
          image.src = image.src.replaceAll(open, '').replaceAll(close, '').replaceAll(escapedOpen, '').replaceAll(escapedClose, '');
        });
      }
    }
  }

  const contents = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "code", "td"];

  contents.forEach(function(c){
    const cs = elems(c, context);
    if(cs.length) {
      cs.forEach(function(cx, index){
        if(cx.children.length >= 1) {
          Array.from(cx.children).forEach(function(child){
            wrap(child);
          })
          wrap(cx);
        } else {
          wrap(cx);
        }
        // sanitize urls and ids
      });
    }
  });

  const hyperLinks = elems('a');
  if(hyperLinks) {
    hyperLinks.forEach(function(link){
      link.href = link.href.replaceAll(encodeURI(open), "").replaceAll(encodeURI(close), "");
    });
  }
}

function emptyEl(el) {
  while(el.firstChild)
  el.removeChild(el.firstChild);
}

function matchTarget(element, selector) {
  if(isObj(element)) {
    let matches = false;
    const isExactMatch = element.matches(selector);
    const exactTarget = element.closest(selector);
    matches = isExactMatch ? isExactMatch : exactTarget;
    return  {
      exact: isExactMatch, // is exact target
      valid: matches,
      actual: exactTarget
    };
  }
}

function goBack(target) {
  const matchCriteria = matchTarget(target, `.${goBackClass}`);

  if(matchCriteria.valid) {
    history.back();
  }
}

(function() {
  const bodyElement = elem('body');
  const platform = navigator.platform.toLowerCase();
  if(platform.includes("win")) {
    pushClass(bodyElement, 'windows');
  }
})();

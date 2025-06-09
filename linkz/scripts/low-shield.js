document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') {
    e.preventDefault();
    return false;
  }

  if (e.ctrlKey) {
    if (e.shiftKey) {
      if (['I', 'J', 'C', 'K', 'U', 'S', 'F10', 'P', 'Q'].includes(e.key.toUpperCase())) {
        e.preventDefault();
        return false;
      }
    } else {
      if (['u', 's', 'i', 'U', 'S', 'I'].includes(e.key)) {
        e.preventDefault();
        return false;
      }
    }
  }
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  return false;
});

document.addEventListener('dragstart', function (e) {
  e.preventDefault();
  return false;
});

export default function (h, conf) {

  const slot = {}



  for (let k in conf.__slot__) {

    if (conf.__slot__[k]) {
      slot[k] = () => {
        return conf.__slot__[k]
      }
    }
  }



  return slot;
}


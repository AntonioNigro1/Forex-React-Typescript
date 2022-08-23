export function capitalizeFirstLetter(string: string | null | undefined) {
  if (string == null || string == undefined) {
    return "";
  }
  return string.charAt(0).toUpperCase() + string?.slice(1);
}

export function useAddZeroInNumber(number: number): string {
  if (number < 0) {
    return number + "";
  }
  if (number < 10) {
    return "00" + number;
  }
  if (number < 100) {
    return "0" + number;
  }
  return number + "";
}

export const returnId = (url: string) => {
  url = url.slice(34);
  url = url.replace("/", "");
  return parseInt(url);
};
export const returnPrice = (value: number | undefined | null) => {
  if (value == undefined || value == null) return 0;
  return value * 1.8;
};

export function checkDevice(window: Window & typeof globalThis) {
  const { navigator } = window;
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true; // está utilizando celular
  } else {
    return false; // não é celular
  }
}

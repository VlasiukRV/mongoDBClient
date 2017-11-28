
export function getErrorMessage(error) {
  if (error == null) {
    return ''
  }
  return '' + error.responseText + ' (' + error.status + ': ' + error.statusText + ') '
}
export function stylesStatus(status, types) {
   if (status) {
      status = status.toLowerCase();   
      return types[status] || types.unknown;
   }
}
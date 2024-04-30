/**
 * The `loadPage` function fetches and displays an HTML page based on the provided `pageID`.
 * @param pageID - The `pageID` parameter is used to specify the ID of the page that needs to be
 * loaded. If a `pageID` is provided, the function will load the corresponding HTML file from the
 * `pages` directory. If no `pageID` is provided (empty string), the function will
 */
export function loadPage(pageID) {

    if (pageID != '') {
        $.get(`pages/${pageID}.html`, function (data) {
         console.log('data ' + data);
         $('#app').html(data);
        });
    } else {
        $.get(`pages/home.html`, function (data) {
         console.log('data ' + data);
         $('#app').html(data);
        });
      }
}
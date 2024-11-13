// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("page1.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("page2.html", "Untitled Page", "Khizar page 1   ", "");
   this[database_length++] = new SearchPage("page3.html", "Untitled Page", "Hayat Page 2   ", "");
   return this;
}

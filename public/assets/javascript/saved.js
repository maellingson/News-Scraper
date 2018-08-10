$(document).ready(function () {
    var articleContainer = $(".article-container");

    $(document).on("click", "btn.delete", handleArticleDelete);
    $(document).on("click", "btn.notes", handleArticleNotes);
    $(document).on("click", "btn.save", handleArticleNoteSave);
    $(document).on("click", "btn.note-delete", handleArticleNoteDelete);

    initPage();

    function initPage() {

        articleContainer.empty();
        $.get("/api/headlines?/saved=true").then(function (data) {
            if (data && data.length) {
                renderArticles(data);
            }
            else {
                renderEmpty();
            }
        });
    }

    function renderArticles(articles) {
        var articlePanels = [];

        for (var i = 0; i < articles.length; i++) {
            articlePanels.push(createPanel(articles[i]));
        }
        articleContainer.append(articlePanels);
    }
    function createPanel(article) {

        var panel =
            $(["div class='panel panel-default'>",
                "<div class='panel-heading'>",
                "<h3>",
                article.headline,
                "<a class='btn btn-danger delete'>",
                "Delete from Saved",
                "</a>",
                "<a class='btn btn-info notes'>Article Notes</a>",
                "</h3>",
                "</div>",
                "<div class='panel-body'>",
                article.summary,
                "</div>",
                "</div>",
            ].join(""));
        panel.data("_id", article._id);
        return panel;
    }
    function renderEmpty() {
        var emptyAlert =
            $(["<div class='alert alert-warning text-center'>",
                "<h4>No new articles.</h4>",
                "</div>",
                "<div class= 'panel-body text-center'>",
                "<h3>What action would you like to take?</h3>",
                "</div>",
                "<div class='panel-body text-center'>",
                "<h4><a class='scrape-new'>Scrape for new articles!</a><h4>",
                "<h4><a href='/saved'>Go to Saved Articles</a><h4>",
                "</div>",
                "</div>",
            ].join(""));
        articleContainer.append(emptyAlert);
    }

    function renderNotesList(data) {

        var notesToReder = [];
        var currentNotes;
        if(!data.notes.length){
            currentNote = [
                
            ]
        }

    }

})
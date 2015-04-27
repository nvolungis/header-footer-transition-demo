(function(){
  function PageLoader(){
    this.$pageDisplay = $('.page');
    this.$window = $(window);
    this.bind();
  }

  $.extend(PageLoader.prototype, {
    bind: function(){
      this.$window.on('hashchange', this.onHashChange.bind(this));
    },

    onHashChange: function(){
      var page_id = window.location.hash.replace('#', '');
      this.display(page_id);
    },

    display: function(page_id){
      var $pageContent = $('#' + page_id);

      if(this.$pageDisplay.hasClass('is-full')){
        this.displayInFullContainer($pageContent);
      }else{
        this.displayInEmptyContainer($pageContent);
      }
    },

    displayInEmptyContainer: function($content){
      this.$pageDisplay
        .html($content.html())
        .addClass('is-full')
        .addClass('is-transitioned');
    },

    displayInFullContainer: function($content){
      this.openFooter(function(){
        this.$pageDisplay
          .html($content.html())
          .addClass('is-full');

        this.$pageDisplay.removeClass('is-transitioned');
        this.$window.scrollTop(0);

        setTimeout(function(){
          this.$pageDisplay.addClass('is-transitioned');
        }.bind(this), 10);
      }.bind(this))
    },

    openFooter: function(cb){
      var $footer = this.$pageDisplay.find('.page-footer');
      
      $footer.addClass('is-expanded');
      setTimeout(cb, 500);
    }

  });

  window.PageLoader = PageLoader;
}());

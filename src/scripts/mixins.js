export default {
  methods: {

    activateModal: function (event, modalData) {

      if (event) {

        event.preventDefault();

        let project = event.target.closest('.info'),
            target = project.getAttribute('href'),
            prefix = 'projects/',
            url = prefix + target;

        this.pushState(modalData, url);

      }

      this.openModal(modalData);

    },

    deactivateModal: function () {

      this.$router.go(-1);

    },

    pushState: function (state, url) {

      if (history) history.pushState(state, 'Billy Watson', url);

    },

    getProjectData: function (projectName) {

      let projects = this.$store.getters.allProjects,
          project = projects.filter(project => project.name === projectName)[0];

      this.projectData = project;

    },

    linkTo: function (event, file) {

      let href = event ? event.currentTarget.getAttribute('href') : '';

      if (file) {

        window.open(href, '_blank');

      } else {

        if (this.currentFilter) this.$store.commit('restoreProjects');

        this.$router.push(href);

      }

    },

    getClosest: function (elem, selector) {

      for ( ; elem && elem !== document; elem = elem.parentNode ) {

          if (elem.matches(selector)) return elem;

      }

      return null;

    },

    capitalise: function (string) {

      return string.charAt(0).toUpperCase() + string.slice(1);

    },

    toggleElement: function (event, parent, target) {

      let $parent = this.getClosest(event.currentTarget, parent),
          $target = $parent.querySelectorAll(target)[0];

      if ($target) $target.classList.toggle('toggle');

    },

    updateTitleMeta: function (newTitle, newDescription) {

      if (newTitle) document.title = newTitle + ' // Billy Watson';

      if (newDescription) {

        let allMetaElements = document.getElementsByTagName('meta');

        for (var i = 0; i < allMetaElements.length; i++) {

          if (allMetaElements[i].getAttribute('name') == 'description' ||
              allMetaElements[i].getAttribute('itemprop') == 'description' ||
              allMetaElements[i].getAttribute('name') == 'twitter:description' ||
              allMetaElements[i].getAttribute('property') == 'og:description') {

             allMetaElements[i].setAttribute('content', newDescription);

             break;

          }

        }

      }

    }

  }
}

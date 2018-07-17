export default {
  methods: {

    activateModal: function (event, modalData) {

      if (event) {

        event.preventDefault();

        let project = event.target.closest('.info'),
            target = project.getAttribute('href'),
            prefix = 'projects/',
            url = prefix + target;

        // if (history) history.pushState(modalData, modalData.title, url);
        this.pushState(modalData, url);

      }

      this.openModal(modalData);

    },

    deactivateModal: function () {

      // if (event) {
      //
      //   this.pushState('home', '/');
      //
      // }
      //
      // this.closeModal();

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

    getClosest: function (elem, selector) {

      for ( ; elem && elem !== document; elem = elem.parentNode ) {

          if (elem.matches(selector)) return elem;

      }

      return null;

    },

    toggleInfo: function (event, parent, target) {

      let $parent = this.getClosest(event.currentTarget, parent),
          $target = $parent.querySelectorAll(target)[0];

      if ($target) $target.classList.toggle('visible');

    }

  }
}

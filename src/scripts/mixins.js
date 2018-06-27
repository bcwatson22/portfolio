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

      this.$router.push('/');

    },

    pushState: function (state, url) {

      if (history) history.pushState(state, 'Billy Watson', url);

    }

  }
}

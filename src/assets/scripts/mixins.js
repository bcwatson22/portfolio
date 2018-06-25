export default {
  methods: {
    deactivateModal: function () {

      if (history) history.pushState('home', 'Billy Watson', '/');

      this.closeModal();

    }
  }
}

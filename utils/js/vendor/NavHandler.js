export class NavHandler {
	constructor() {

		// Remove event listener set by previous instance of NavHandler if it exists
		if ( window.on_click_callback ) {
			window.removeEventListener( 'click', window.on_click_callback );
		}

		// Binding 'this' to 'handleClick' method creates a new reference
		// that's why it needs to be declared like this before being passed as an event listener callback
		window.on_click_callback = this.handleClick.bind( this );

		window.addEventListener( 'click', window.on_click_callback );
	}

	handleClick( e ) {
		if ( e.target.id === 'nav-toggle' ) {
			this.navToggle();
		}
	}

	navToggle() {
		document.body.classList.toggle( 'nav-open', !document.body.classList.contains( 'nav-open' ) );
	}
}
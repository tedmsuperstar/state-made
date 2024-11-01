<?php
/**
 * Theme functions and definitions, wp queries etc
 *
 *
 * @package enqueue
 */


if( !defined( 'ABSPATH' ) )
		exit;

class Enqueue {

	

	public static function enqueue(){
		Enqueue::enqueueScripts();
		Enqueue::enqueueStyles();
	}

	public static function enqueueScripts(){
	    wp_enqueue_script('jquery');
	    wp_deregister_script('jquery');

	}

	public static function enqueueStyles(){

		//remove the css for gutenberg blocks
		//wp_dequeue_style( 'wp-block-library' );
		//we are not a classic theme
		//wp_dequeue_style( 'classic-theme-styles');

		//add our main stylesheet
		wp_enqueue_style( 'state-made-theme-style', get_stylesheet_uri(), array(), STATE_MADE_RELEASE_STRING );  
		

	}



}

	 


add_action( 'wp_enqueue_scripts', 'Enqueue::enqueue',999 );

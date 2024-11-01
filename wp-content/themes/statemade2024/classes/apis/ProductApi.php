<?php
/**
 * Theme functions and definitions, wp queries etc
 *
 *
 * @package deals
 */


if( !defined( 'ABSPATH' ) )
		exit;

class ProductApi {


	static function getExplore($requestData){

			$parameters = $requestData->get_params();


			$cache_key = "cached-product-json-";
			$cached_json = wp_cache_get( $cache_key, "state-made");

			if($cached_json){
				return $cached_json;
			}
			header( "Access-Control-Allow-Origin: *" );
			//header("Cache-Control: public, max-age=3600");
			$products = wp_get_recent_posts(array(
                'numberposts' => 10,
                'post_type' => 'product',
                'post_status' => 'publish'
            ));

		
            $jsonResponse = self::getPostJson($products);
            wp_cache_add( $cache_key, $jsonResponse, "state-made", 300);
            return $jsonResponse;
			
			//$parameters = $requestData->get_params();
			//return SearchApi::doSearch($parameters);

		return array("error"=>"That doesn't exist");

	}

    private static function getPostJson($posts) {
        $items = [];
        foreach ($posts as $post) {
            $item = new stdClass();
            $item->post = $post;
            $item->wp_id = $post["ID"];
            $item->name = get_field('name',$post["ID"]);
            $item->url = get_field('url',$post["ID"]);
            $item->display_price = get_field('display_price',$post["ID"]);
            $item->display_location = get_field('display_location',$post["ID"]);
            $item->image1x = get_field('image1x',$post["ID"]);
            $item->image2x = get_field('image2x',$post["ID"]);
            $item->post_url = get_permalink($post["ID"]);
            array_push($items,$item);
        }
    

        return [
           // "posts" => $posts,
            "items" => $items,
        ];
    }
}



add_action( 'rest_api_init', function () {
	register_rest_route( 'state-made/v1', '/product/explore', array(
	    'methods' => array('GET'),
	    'callback' => 'ProductApi::getExplore',

  ) );
} );



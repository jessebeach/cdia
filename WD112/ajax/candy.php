<?php

header('Content-Type: application/json');

$candy = array(
  'heart-pastilles' => array(
    'display_name' => 'Valentine\'s Hearts',
    'price' => '0.5',
    'denomination' => 'USD',
    'unit' => 'oz',
    // Not awesome, but it works.
    'image' => 'images/hearts.jpg',
  ),
);

echo json_encode($candy);
?>

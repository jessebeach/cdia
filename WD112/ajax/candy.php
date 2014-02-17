<?php

header('Content-Type: application/json');

$candy = array(
  'heart-pastilles' => array(
    'label' => 'Valentine\'s Hearts',
    'SKU' => '9D83SD671DJAL9GYZGZ81',
    'price' => '0.5',
    'denomination' => 'USD',
    'unit' => 'oz',
    // Not awesome, but it works.
    'image' => 'images/hearts.jpg',
  ),
  'gummies' => array(
    'label' => 'Gummies',
    'SKU' => 'PZEND7QATCB6103MUDIG8',
    'price' => '1.2',
    'denomination' => 'USD',
    'unit' => 'oz',
    // Not awesome, but it works.
    'image' => 'images/gummies.jpg',
  ),
  'jellybeans' => array(
    'label' => 'Jelly Beans',
    'SKU' => 'MHAIG83MC7153MC7D61HDH',
    'price' => '1.5',
    'denomination' => 'USD',
    'unit' => 'lbs',
    // Not awesome, but it works.
    'image' => 'images/jellybeans.jpg',
  ),
);

echo json_encode($candy);
?>

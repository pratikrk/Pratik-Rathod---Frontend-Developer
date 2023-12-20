<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Content-Type: application/json');


function authenticate() {
   
    return true;
}


if (!authenticate()) {
    http_response_code(401);
    echo json_encode(array('error' => 'Unauthorized'));
    exit();
}

// fetching  here
function fetchData() {
     // SpaceX API URL for fetching capsules data
     $apiUrl = 'https://api.spacexdata.com/v3/capsules';

     // Fetch data from the SpaceX API
     $response = file_get_contents($apiUrl);
 
     // Decode the JSON response
     $data = json_decode($response, true);
 
     // Filter data based on parameters (status, original_launch, type)
     $filteredData = array_filter($data, function ($item) {
         $statusFilter = empty($_GET['status']) || $item['status'] === $_GET['status'];
         $originalLaunchFilter = empty($_GET['original_launch']) || $item['original_launch'] === $_GET['original_launch'];
         $typeFilter = empty($_GET['type']) || $item['type'] === $_GET['type'];
 
         return $statusFilter && $originalLaunchFilter && $typeFilter;
     });
 
     return array_values($filteredData); 
}


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
   
    $responseData = fetchData();

 
    echo json_encode($responseData);
} else {
   
    http_response_code(405);
    echo json_encode(array('error' => 'Method Not Allowed'));
}
?>
<?php
if(isset($_GET['country'])){
    

$country = $_GET['country'];
$day ="2020-05-10";// $_GET['day'];
$dates = array("2020-02-01","2020-03-01","2020-04-01","2020-05-01","2020-06-01","2020-07-01","2020-08-01","2020-09-01","2020-10-01","2020-11-01","2020-12-01","2021-01-01","2021-02-01","2021-03-01","2021-04-01","2021-05-01","2021-06-01",date('Y-m-d'));
$res=array();
foreach($dates as $day) {

$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://covid-193.p.rapidapi.com/history?country=".$country."&day=".$day,
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"x-rapidapi-host: covid-193.p.rapidapi.com",
		"x-rapidapi-key: 1991bc5b50mshab850266f1d571ep1bf481jsnf38eaf4b477f"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
//	echo $response;

$arr = json_decode($response);
$myObj->date = $day;
$myObj->active = $arr->response[0]->cases->active;
$myObj->recovered = $arr->response[0]->cases->recovered;
$myObj->total = $arr->response[0]->cases->total;
$myObj->deaths = $arr->response[0]->deaths->total;

$encoded = json_encode($myObj);

array_push($res,$encoded);
	
//	print_r(json_encode($arr->response[0]->deaths));

}
}


echo json_encode($res);
}
?>
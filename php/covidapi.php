<?php

$curl = curl_init();

curl_setopt_array($curl, [
CURLOPT_URL => "https://worldometers.p.rapidapi.com/api/coronavirus/all/",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"x-rapidapi-host: worldometers.p.rapidapi.com",
		"x-rapidapi-key: 1991bc5b50mshab850266f1d571ep1bf481jsnf38eaf4b477f"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}
?>
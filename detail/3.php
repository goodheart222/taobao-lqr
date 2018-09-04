<?php

	//声明数组 模拟数据
	$data=[
		["pic"=>"images/".mt_rand(3,19).".jpg"],
	];
	
	//输出json数据
	echo json_encode($data);

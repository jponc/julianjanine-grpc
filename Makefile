compile_protos:
	protoc --go_out=. --go-grpc_out=. protos/*
	protoc --js_out=import_style=commonjs,binary:./web/src \
		--grpc-web_out=import_style=typescript,mode=grpcweb:./web/src protos/*

build_image:
	docker build -t julianponce/julianjanine-grpc:$(shell git log -1 --pretty=%h) .

push_image:
	docker push julianponce/julianjanine-grpc:$(shell git log -1 --pretty=%h)

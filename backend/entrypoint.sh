
npm i
# npm run migrate:up -- --env=ci

if [ "$DEBUG" = "true" ]; then
	npm run dev
	echo 'Running backend in dev mode'
else
	npm run build
	npm run start
	echo 'Running backend in prod mode'
fi

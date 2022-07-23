run-example:
	cd exampleSite && hugo server -D --gc -p 13131

chroma-css:
	hugo gen chromastyles --style=dracula > assets/css/common/chroma.css

.RECIPEPREFIX=>

default:
> make compile
> make run

compile:
> npx tsc
> cp -r ./html ./dist

run:
> sudo node dist/main.js
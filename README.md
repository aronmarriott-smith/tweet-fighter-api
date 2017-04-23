# Tweet Fighter API


## Instilation
### Instilation For Development
For development you will need the folowing installed:

* sqlite3
* node
* npm

Clone the the repo:
```
git clone git@github.com:aronmarriott-smith/tweet-fighter-api.git .
```

Install the dependencies:
```
cd tweet-fighter-api
npm install
```
Create a sqlite database in the root of the project
```
touch database.sqliet
```

### Instilation For Production
For production we recomend running on an LTS version of ubuntu server which uses systemd and has the following installed:

* sqlite3
* mysql (or marina db)
* node
* npm

Clone the the repo:
```
git clone git@github.com:aronmarriott-smith/tweet-fighter-api.git .
```

Install the dependencies:
```
cd tweet-fighter-api
npm install
```

Copy the tweet_fighter.service.example
```
cp tweet_fighter.service.example tweet_fighter.service
```
Edit the `ExecStart` and `WorkingDirectory` to match your instilation path
Copy your service file into the /etc/systemd/system directory. Then make systemd aware of the new service:
```
systemctl daemon-reload
```
Start the service:
```
systemctl start tweet_fighter
```
All your node console output is logged to the journal with the same name as your .service file. To watch logs for 'tweet_fighter' in realtime:
```
journalctl --follow -u tweet_fighter
```

Unless you're perfect the first time you run your app you might have the odd problem. Read the log output using journalctl, fix anything it tells you about, then restart the app with:
```
systemctl restart tweet_fighter
```
Your app should soon be up and running.

### Deploying
Deploying should be a matter of cleaning any generated files, pulling the latest code, installing whatever new packages your node-shrinkwrap file specifies, and restarting the service:
```
git clean -f -d
git pull origin/master
npm install
systemctl restart tweet_fighter
```
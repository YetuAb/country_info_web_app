#!/bin/bash

cd back-end
echo "Starting the backend server..."
node server.js &

cd ../front-end
echo "Starting the frontend server..."
npm start

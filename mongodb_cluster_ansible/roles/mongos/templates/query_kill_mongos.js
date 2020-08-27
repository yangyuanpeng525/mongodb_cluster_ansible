#!/bin/bash
PID=`ps aux | grep  "{{ Config_Server_File }}"/mongos.conf | grep -v 'grep' | awk '{print $2}'`
kill -9 $PID

import os
from os import sys
from subprocess import Popen, PIPE, STDOUT, check_output
import socket
import collections
import time
import re

process_args = [
    'java',
    '-Xmx1024M',
    '-Xms1024M',
    '-jar',
    'minecraft_server.jar',
    'nogui',
]


def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('localhost', port)) == 0


def wait_for_string(str_, stream, verbose=False):
    """
    Waits for an occurance of str_ in stream. May never return! Using a
    timeout would only work if the stream is non-blocking, and that
    means extra work to buffer in case the str_ gets split up
    """
    while True:
        line = stream.readline()
        if verbose:
            sys.stdout.write(line)
        if str_ in line:
            sys.stdout.write(line)
            return


class Minecraft_Process:

    def __init__(self):
        if not is_port_in_use(25565):
            self.MinecraftProcess = Popen(
                process_args,
                stdin=PIPE,
                stdout=PIPE,
                bufsize=1,
                text=True
            )
            wait_for_string('Done', self.MinecraftProcess.stdout, True)

    def write(self, command, response):
        proc = self.MinecraftProcess
        proc.stdin.write(
            str(command['command']+'\n')
        )
        proc.stdin.flush()
        time.sleep(0.1)
        with open('logs/latest.log', 'r') as file:
            line = re.sub('\[.*\]: |\\n', '', file.readlines()[-1])
        return response(line)

    def kill(self):

        self.MinecraftProcess.kill()

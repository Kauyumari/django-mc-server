import os
import subprocess
import socket

process_args = [
    '-Xmx1024M',
    '-Xms1024M',
    '-jar',
    'minecraft_server.jar',
    'nogui',
]


def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('localhost', port)) == 0


class Minecraft_Process:

    def __init__(self):
        if not hasattr(self, 'MinecraftProcess'):
            self.initialize_process()

    def initialize_process(self):
        if not is_port_in_use(25565):
            self.MinecraftProcess = subprocess.Popen(
                ['java'] + process_args
            )

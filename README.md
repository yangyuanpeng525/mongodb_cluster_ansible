# mongodb_cluster_ansible
>
使用方法：git clone https://github.com/yangyuanpeng525/mongodb_cluster_ansible.git
>
cd mongodb_cluster_ansible/mongodb_cluster_ansible/
>
ansible-playbook --syntax-check mongodb_cluster.yaml
>
ansible-playbook mongodb_cluster.yaml
>
可选择安装方式：true为在线yum源安装，false为本地rpm包安装，默认为本地安装，版本mongodb-org-3.4.24
>
修改：mongodb_cluster_ansible/roles/install_Mangodb/vars/main.yaml中InstallMode: false（true）

# Usar a imagem base do Nginx
FROM nginx:alpine

# Remover a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar a configuração personalizada do Nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/

# Copiar os certificados SSL
COPY nginx/ssl/ /etc/nginx/ssl/

# Copiar os arquivos do front-end para a pasta pública do Nginx
COPY dist/stagease-client/ /usr/share/nginx/html/

# Expor a porta 443 para o HTTPS
EXPOSE 443

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]

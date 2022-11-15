FROM httpd:2.4.54-alpine3.16

RUN apk --no-cache -q add libcap \
    #setcap to bind to privileged ports as non-root
    && setcap 'cap_net_bind_service=+ep' /usr/local/apache2/bin/httpd \
    && getcap /usr/local/apache2/bin/httpd \
    && rm -rf /var/cache/apk/*

#Change access righs to conf, logs, bin from root to www-data
RUN chown -hR www-data:www-data /usr/local/apache2/

COPY ./app/ /usr/local/apache2/htdocs/

# #Run as a   -- www-data
USER www-data
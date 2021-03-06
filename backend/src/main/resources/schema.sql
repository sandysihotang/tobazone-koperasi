SET sql_mode = '';

create table if not exists oauth_client_details
(
    client_id               varchar(255) NULL,
    client_secret           varchar(255) NULL,
    web_server_redirect_uri varchar(2048) default null,
    scope                   varchar(255)  default null,
    access_token_validity   int(11)       default null,
    refresh_token_validity  int(11)       default null,
    resource_ids            varchar(1024) default null,
    authorized_grant_types  varchar(1024) default null,
    authorities             varchar(1024) default null,
    additional_information  varchar(4096) default null,
    autoapprove             varchar(255)  default null,
    primary key (client_id)
) engine = innodb;

create table if not exists permission
(
    id   int(11) NOT NULL auto_increment,
    name varchar(512) default null,
    primary key (id),
    unique key name (name)
) engine = innodb;

create table if not exists role
(
    id   int(11) NOT NULL auto_increment,
    name varchar(255) default null,
    primary key (id),
    unique key name (name)
) engine = innodb;

create table if not exists user
(
    id                    int(11)       NOT NULL auto_increment,
    username              varchar(100)  NULL,
    password              varchar(1024) NULL,
    email                 varchar(1024) NULL,
    enabled               tinyint(4)    NOT NULL DEFAULT 1,
    accountNonExpired     tinyint(4)    NOT NULL DEFAULT 1,
    credentialsNonExpired tinyint(4)    NOT NULL DEFAULT 1,
    accountNonLocked      tinyint(4)    NOT NULL DEFAULT 1,
    primary key (id),
    unique key username (username)
) engine = innodb;


create table if not exists permission_role
(
    permission_id int(11) default null,
    role_id       int(11) default null,
    key permission_id (permission_id),
    key role_id (role_id),
    constraint permission_role_ibfk_1 foreign key (permission_id) references permission (id),
    constraint permission_role_ibfk_2 foreign key (role_id) references role (id)
) engine = innodb;



create table if not exists role_user
(
    id      int primary key auto_increment,
    role_id int(11) default null,
    user_id int(11) default null,
    key role_id (role_id),
    key user_id (user_id),
    constraint role_user_ibfk_1 foreign key (role_id) references role (id),
    constraint role_user_ibfk_2 foreign key (user_id) references user (id)
) engine = innodb;

-- token store
create table if not exists oauth_client_token
(
    token_id          VARCHAR(256),
    token             LONG VARBINARY,
    authentication_id VARCHAR(256) PRIMARY KEY,
    user_name         VARCHAR(256),
    client_id         VARCHAR(256)
);

create table if not exists oauth_access_token
(
    token_id          VARCHAR(256),
    token             LONG VARBINARY,
    authentication_id VARCHAR(256) PRIMARY KEY,
    user_name         VARCHAR(256),
    client_id         VARCHAR(256),
    authentication    LONG VARBINARY,
    refresh_token     VARCHAR(256)
);

create table if not exists oauth_refresh_token
(
    token_id       VARCHAR(256),
    token          LONG VARBINARY,
    authentication LONG VARBINARY
);

create table if not exists oauth_code
(
    code           VARCHAR(256),
    authentication LONG VARBINARY
);

create table if not exists oauth_approvals
(
    userId         VARCHAR(256),
    clientId       VARCHAR(256),

    scope          VARCHAR(256),
    status         VARCHAR(10),
    expiresAt      TIMESTAMP,
    lastModifiedAt TIMESTAMP
);
CREATE TABLE IF NOT EXISTS user_detail
(
    id         int          NOT null auto_increment,
    first_name varchar(191) NULL,
    last_name  varchar(191) NULL,
    address    varchar(191) NULL,
    no_telepon varchar(191) NULL,
    user_id    int(11)      NULL,
    primary key (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE if not exists koperasi
(
    id                         int(11)      NOT null auto_increment,
    nama_koperasi              varchar(191) NOT NULL,
    alamat_koperasi            varchar(191) NOT NULL,
    tahun_berdiri_koperasi     date         NOT NULL,
    no_izin_koperasi           varchar(191) NOT NULL,
    nama_pendiri               varchar(191) NOT NULL,
    logo_koperasi              text,
    jenis_koperasi             int(11)      NOT NULL,
    id_user                    int(11)      NOT NULL,
    email                      varchar(191) NOT NULL,
    have_field_register_member tinyint(1)   NOT NULL DEFAULT 0,
    primary key (id),
    FOREIGN KEY (id_user) REFERENCES user (id)
);

CREATE TABLE IF NOT EXISTS field_daftar_anggota
(
    id            int(11)                                            NOT null auto_increment,
    koperasi_id   int(11)                                            NOT NULL,
    pattern_field longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
    primary key (id),
    foreign key (koperasi_id) references koperasi (id)
);

CREATE TABLE IF NOT EXISTS anggota_koperasi
(
    id          int(11)                                            NOT NULL auto_increment,
    id_koperasi int(11)                                            NOT NULL,
    data        longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
    id_user     int(11)                                            NOT NULL,
    primary key (id),
    foreign key (id_koperasi) references koperasi (id),
    foreign key (id_user) references user (id)
);
CREATE TABLE IF NOT EXISTS pengaturan_pinjaman
(
    id                 int(11) NOT NULL AUTO_INCREMENT,
    bunga_pinjaman     double  NOT NULL,
    min_tenor          int(11) NOT NULL,
    max_tenor          int(11) NOT NULL,
    ambang_batas_denda int(11) NOT NULL,
    persentase_denda   double  NOT NULL,
    primary key (id)
);

CREATE TABLE IF NOT EXISTS koperasi_pengaturan_pinjaman
(
    id            int(11)    NOT NULL AUTO_INCREMENT,
    id_koperasi   int(11)    NOT NULL,
    id_pengaturan int(11)    NOT NULL,
    status        tinyint(1) NOT NULL,
    primary key (id),
    foreign key (id_koperasi) references koperasi (id),
    foreign key (id_pengaturan) references pengaturan_pinjaman (id)

);
CREATE TABLE IF NOT EXISTS peminjaman
(
    id                      int(11)      NOT NULL AUTO_INCREMENT,
    jumlah_pinjaman         double       NOT NULL,
    jaminan                 varchar(191) NOT NULL,
    kode_pinjaman           VARCHAR(191) NOT NULL,
    id_user                 int(11)      NOT NULL,
    id_koperasi             int(11)      NOT NULL,
    id_pengaturan_pinjaman  int(11)      NOT NULL,
    status                  int(11)      NOT NULL,
    date_pengajuan_diterima DATE         NULL,
    tenor                   int(11)      NOT NULL,
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at              DATETIME  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES user (id),
    FOREIGN KEY (id_pengaturan_pinjaman) REFERENCES pengaturan_pinjaman (id),
    FOREIGN KEY (id_koperasi) REFERENCES koperasi (id)
);

CREATE TABLE IF NOT EXISTS angsuran
(
    id                  int(11)    NOT NULL AUTO_INCREMENT,
    id_pinjaman         int(11)    NOT NULL,
    angsuran_pokok      double     NOT NULL,
    bunga               double     NOT NULL,
    status_bayar        tinyint(1) NOT NULL,
    tanggal_bayar       date       NULL,
    tanggal_jatuh_tempo date       NOT NULL,
    denda               double     NULL,
    total_bayar         double     NULL,
    total_angsuran      double     NOT NULL,
    total_tagihan       double     NOT NULL,
    urutan_ke           int(11)    NOT NULL,
    primary key (id),
    foreign key (id_pinjaman) REFERENCES peminjaman (id)
)
package io.github.sandy.repository;

import io.github.sandy.model.Koperasi;
import io.github.sandy.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface KoperasiRepository extends JpaRepository<Koperasi, Integer> {
    @Query(
            value = "SELECT nama_koperasi, koperasi.id, jenis_koperasi, nama_pendiri, alamat_koperasi, " +
                    "tahun_berdiri_koperasi, koperasi.email, no_izin_koperasi, users.have_koperasi,logo_koperasi FROM koperasi " +
                    "INNER JOIN users " +
                    "ON users.id = koperasi.id_user " +
                    "WHERE users.have_koperasi != 0",
            nativeQuery = true
    )
    List<Map<String, Object>> findByIsHaveKoperasi();


    @Query(
            value = "SELECT nama_koperasi, koperasi.id, jenis_koperasi, nama_pendiri, alamat_koperasi, " +
                    "tahun_berdiri_koperasi, koperasi.email, no_izin_koperasi, users.have_koperasi,logo_koperasi FROM koperasi " +
                    "INNER JOIN users " +
                    "ON users.id = koperasi.id_user ",
            nativeQuery = true
    )
    List<Map<String, Object>> findByIsHaveKoperasiActive();

    @Query(
            value = "SELECT amount, gambar,nama_koperasi, mc.id, jenis_koperasi, nama_pendiri, alamat_koperasi, " +
                    "tahun_berdiri_koperasi, koperasi.email, no_izin_koperasi, u.have_koperasi FROM maintenence_cost mc " +
                    "INNER JOIN koperasi on koperasi.id = mc.id_koperasi " +
                    "INNER JOIN users u on koperasi.id_user = u.id " +
                    "WHERE mc.aktif = false",
            nativeQuery = true
    )
    List<Map<String, Object>> getLayanan();

    @Query(
            value = "SELECT nama_koperasi, koperasi.id, jenis_koperasi, nama_pendiri, alamat_koperasi, " +
                    "tahun_berdiri_koperasi, koperasi.email, no_izin_koperasi, users.have_koperasi,logo_koperasi FROM koperasi " +
                    "INNER JOIN users " +
                    "ON users.id = koperasi.id_user " +
                    "WHERE users.have_koperasi = 2",
            nativeQuery = true
    )
    List<Map<String, Object>> findByIsHaveKoperasiNotActive();

    @Modifying(clearAutomatically = true)
    @Query(value = "INSERT INTO koperasi (alamat_koperasi,nama_koperasi,jenis_koperasi, nama_pendiri, " +
            "no_izin_koperasi, tahun_berdiri_koperasi,email, id_user, logo_koperasi) VALUES (?1, ?2,?3,?4,?5,?6,?7,?8,?9)", nativeQuery = true)
    @Transactional
    void createKoperasi(String alamat, String namaKoperasi, Integer jenisKoperasi, String pendiri, String izin, Date tahunBerdiri, String email, Integer idUser, String logo);

    @Modifying(clearAutomatically = true)
    @Query(value = "INSERT INTO maintenence_cost (id_koperasi,aktif,start_date, end_date, " +
            "amount, gambar) VALUES (?1, false, CURRENT_DATE, CURRENT_DATE + INTERVAL '3 months', ?2, ?3)", nativeQuery = true)
    @Transactional
    void kirimbukti(Integer idKoperasi, Integer amount, String gambar);

    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE koperasi set have_field_register_member = true where id = ?1", nativeQuery = true)
    @Transactional
    void haveField(Integer idKoperasi);

    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE users set have_koperasi = 3 where id = ?1", nativeQuery = true)
    @Transactional
    void changeStatus(Integer idKoperasi);

    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE maintenence_cost set aktif = true where id_koperasi = ?1", nativeQuery = true)
    @Transactional
    void changeStatusMaintenence(Integer idKoperasi);

    @Query(
            value = "SELECT koperasi.id,nama_koperasi, alamat_koperasi, tahun_berdiri_koperasi, no_izin_koperasi, nama_pendiri, logo_koperasi, jenis_koperasi,email, have_field_register_member FROM koperasi " +
                    "inner join anggota_koperasi ak on koperasi.id = ak.id_koperasi " +
                    "WHERE  ak.id_user= ?1 LIMIT 1",
            nativeQuery = true
    )
    Map<String, Object> getKoperasiUserIdInnerAnggota(Integer id);

    @Query(
            value = "SELECT id, nama_koperasi, alamat_koperasi, tahun_berdiri_koperasi, no_izin_koperasi, nama_pendiri, logo_koperasi, jenis_koperasi, id_user, email, have_field_register_member FROM koperasi " +
                    "WHERE id_user = ?1 LIMIT 1",
            nativeQuery = true
    )
    Map<String, Object> getKoperasiUserId(Integer id);

    @Query(
            value = "SELECT id, nama_koperasi, alamat_koperasi, tahun_berdiri_koperasi, no_izin_koperasi, nama_pendiri, logo_koperasi, jenis_koperasi, id_user, email, have_field_register_member FROM koperasi " +
                    "WHERE id = ?1 LIMIT 1",
            nativeQuery = true
    )
    Map<String, Object> getKoperasiID(Integer id);

    @Query(
            value = "SELECT id_koperasi FROM maintenence_cost " +
                    "WHERE id = ?1 LIMIT 1",
            nativeQuery = true
    )
    Map<String, Object> getKoperasiIdFromMaintenence(Integer id);

    @Query(
            value = "SELECT jenis_koperasi from koperasi " +
                    "INNER JOIN users on koperasi.id_user = users.id " +
                    "where users.id = ?1 LIMIT 1",
            nativeQuery = true
    )
    Integer getJenisFromKoperasi(Integer idUser);

    @Query(
            value = "select k.id, nama_koperasi, alamat_koperasi, tahun_berdiri_koperasi, no_izin_koperasi, nama_pendiri, logo_koperasi, jenis_koperasi, have_field_register_member from koperasi k " +
                    "INNER JOIN aktivasi_simpanan a on k.id = a.id_koperasi " +
                    "where a.id = ?1 limit 1",
            nativeQuery = true
    )
    Map<String, Object> getKoperasibySimpanan(Integer idSimpanan);

    Koperasi findFirstByUser(User user);
}

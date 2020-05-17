package io.github.sandy.controller;

import io.github.sandy.ErrorCode.Err;
import io.github.sandy.model.*;
import io.github.sandy.repository.*;
import io.github.sandy.request.Requestbody;
import io.github.sandy.service.PeminjamanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.*;

@RestController
public class PeminjamanController {
    @Autowired
    PinjamanRepository pinjamanRepository;

    @Autowired
    PeminjamanService peminjamanService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    AngsuranRepository angsuranRepository;

    @Autowired
    KoperasiRepository koperasiRepository;

    @Autowired
    KoperasiPengaturanPinjamanRepository koperasiPengaturanPinjamanRepository;

    @Autowired
    PengaturanPinjamanRepository pengaturanPinjamanRepository;


    @RequestMapping(value = "/api/requestpeminjaman", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Err> requestPinjaman(@RequestBody Requestbody requestbody, HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        String uname = principal.getName();
        Map<String, Object> user = userRepository.getUserUsername(uname);
        peminjamanService.requestPinjaman(user, requestbody);
        return new ResponseEntity<>(new Err(200, ""), HttpStatus.OK);
    }

    @RequestMapping(value = "/api/requestpeminjamanfrompengurus/{idUser}", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Err> requestPinjamanFromPengurus(@RequestBody Requestbody requestbody, @PathVariable("idUser") Integer idUser) {
        Map<String, Object> user = userRepository.findFirstById(idUser);
        if (pinjamanRepository.existsByUserAndStatusIn(userRepository.getOne((Integer) user.get("id")), new Integer[]{2, 4, 5})) {
            return new ResponseEntity<>(new Err(400, "User masih memiliki peminjaman yang sedang berjalan"), HttpStatus.OK);
        }
        peminjamanService.requestPinjaman(user, requestbody);
        return new ResponseEntity<>(new Err(200, ""), HttpStatus.OK);
    }

    @RequestMapping(value = "/api/getadapinjaman", method = RequestMethod.GET)
    public boolean getAdaPinjaman(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        String uname = principal.getName();
        Map<String, Object> user = userRepository.getUserUsername(uname);
        return pinjamanRepository.existsAdaPinjaman((Integer) user.get("id"), new Integer[]{2, 4, 5});
    }


    @RequestMapping(value = "/api/getpinjamanselesai", method = RequestMethod.GET)
    public boolean getAdaPinjamanSelesai(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        String uname = principal.getName();
        Map<String, Object> user = userRepository.getUserUsername(uname);
        return pinjamanRepository.existsAdaPinjaman((Integer) user.get("id"), new Integer[]{6});
    }

    @RequestMapping(value = "/api/getdatapinjaman", method = RequestMethod.GET)
    public Map<String, Object> getDataPinjaman(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        String uname = principal.getName();
        Map<String, Object> user = userRepository.getUserUsername(uname);
        return pinjamanRepository.getFirstByUserAndStatusIn((Integer) user.get("id"), new Integer[]{2, 4, 5});
    }

    @RequestMapping(value = "/api/getpinjamanselesaidata", method = RequestMethod.GET)
    public List<Map<String, Object>> getDataPinjamanSelesai(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        String uname = principal.getName();
        Map<String, Object> user = userRepository.getUserUsername(uname);
        return pinjamanRepository.getByUserAndStatus((Integer) user.get("id"), 6);
    }

    @RequestMapping(value = "/api/getdatapengajuanpinjaman", method = RequestMethod.GET)
    public List<Map<String, Object>> getDataRequestPinjaman(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        String uname = principal.getName();
        Map<String, Object> user = userRepository.getUserUsername(uname);
        Map<String, Object> koperasi = koperasiRepository.getKoperasiUserId((Integer) user.get("id"));
        return pinjamanRepository.getAllByKoperasi((Integer) koperasi.get("id"));
    }

    @RequestMapping(value = "/api/getdatapengajuanapprove", method = RequestMethod.GET)
    public List<Map<String, Object>> getDataApprove(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        String uname = principal.getName();
        Map<String, Object> user = userRepository.getUserUsername(uname);
        Map<String, Object> koperasi = koperasiRepository.getKoperasiUserId((Integer) user.get("id"));
        return pinjamanRepository.getAllByKoperasiAndStatus((Integer) koperasi.get("id"), 2);
    }

    @RequestMapping(value = "/api/existtagihan", method = RequestMethod.GET)
    public boolean existTagihan(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        String uname = principal.getName();
        Map<String, Object> user = userRepository.getUserUsername(uname);
        return pinjamanRepository.existsByUserAndStatus((Integer) user.get("id"), 2);
    }

    @RequestMapping(value = "/api/gettagihan", method = RequestMethod.GET)
    public Pinjaman getTagihan(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        String uname = principal.getName();
        Map<String, Object> user = userRepository.getUserUsername(uname);
        return pinjamanRepository.getFirstByUserAndStatus(userRepository.getOne((Integer) user.get("id")), 2);
    }

    @RequestMapping(value = "/api/savepinjamanfrompengurus/{id}", method = RequestMethod.PUT)
    public void getData(@RequestBody Requestbody requestbody, @PathVariable("id") int id) {
        peminjamanService.actionfromPengurus(requestbody, id);
    }

    @RequestMapping(value = "/api/getdataajuan/{id}", method = RequestMethod.GET)
    public List<Map<String, Object>> getData(@PathVariable("id") int id) {
        Map<String, Object> pinjaman = pinjamanRepository.getFirstById(id);
        return angsuranRepository.getAllByPinjamanOrderByUrutanKeAsc((Integer) pinjaman.get("id"));
    }

    @RequestMapping(value = "/api/getdatapengajureqpinjaman", method = RequestMethod.GET)
    public List<User> getDataPengajuSimpanan(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        String uname = principal.getName();
        Map<String, Object> user = userRepository.getUserUsername(uname);
        Map<String, Object> koperasi = koperasiRepository.getKoperasiUserId((Integer) user.get("id"));
        return userRepository.findByKoperasiForRequest((Integer) koperasi.get("id"), new Integer[]{2, 4, 5});
    }

    @RequestMapping(value = "/api/getpengaturanpinjamanreqpinjamaninpengurus", method = RequestMethod.GET)
    public PengaturanPinjaman getPengaturanPeminjamanForRequestPinjaman(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        String uname = principal.getName();
        Map<String, Object> user = userRepository.getUserUsername(uname);
        Map<String, Object> koperasi = koperasiRepository.getKoperasiUserId((Integer) user.get("id"));
        Koperasi kop =koperasiRepository.getOne((Integer) koperasi.get("id"));
        if (koperasiPengaturanPinjamanRepository.existsByKoperasiAndStatus(kop, true)) {
            KoperasiPengaturanPinjaman koperasiPengaturanPinjaman = koperasiPengaturanPinjamanRepository.getFirstByKoperasiAndStatus(kop, true).get();
            return pengaturanPinjamanRepository.findFirstById(koperasiPengaturanPinjaman.getPengaturanPinjaman().getId()).get();
        }
        return null;
    }

    @RequestMapping(value = "/api/getdatapembayaran/{id}", method = RequestMethod.GET)
    public List<Map<String, Object>> getDataPembayaran(@PathVariable("id") int id) {
        Map<String, Object> pinjaman = pinjamanRepository.getFirstById(id);
        return angsuranRepository.getAllByPinjamanAndStatusBayar((Integer) pinjaman.get("id"), false);
    }

    @RequestMapping(value = "/api/getangsuranbasedidpinjaman/{id}", method = RequestMethod.GET)
    public Map<String, Object> getDataForAnggota(@PathVariable("id") int id) {
        Map<String, Object> pinjaman = pinjamanRepository.getFirstById(id);
        Map<String, Object> angsuran = angsuranRepository.getFirstByPinjamanAndStatusBayarOrderByUrutanKe((Integer) pinjaman.get("id"), false);
        return angsuran;
    }

    @RequestMapping(value = "/api/pembayaransukses/{id}", method = RequestMethod.PUT)
    public void pembayaranAngsuran(@PathVariable("id") int id, @RequestBody Requestbody requestbody) {
        Angsuran angsuran = angsuranRepository.getOne(id);
        angsuran.setTanggalBayar(new Date(requestbody.getDate()));
        angsuran.setStatusBayar(true);
        angsuran.setTotalBayar((angsuran.getDenda() == null ? 0 : angsuran.getDenda()) + angsuran.getTotalTagihan());
        angsuran.setTotalTagihan(0.0);
        angsuran.setDenda(0.0);
        angsuranRepository.save(angsuran);
        if (!angsuranRepository.existsByPinjamanAndStatusBayar(angsuran.getPinjaman(), false)) {
            Pinjaman pinjaman = pinjamanRepository.getOne(angsuran.getPinjaman().getId());
            pinjaman.setStatus(6);
            pinjaman.setUpdatedAt(new Date());
            pinjamanRepository.save(pinjaman);
        }
    }
}
